/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const fs = require('fs');
const util = require('util');
const YAML = require('yaml');
const subDays = require('date-fns/subDays');

const mkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);


// You can delete this file if you're not using it
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent);

    createNodeField({ node, name: 'type', value: parent.relativeDirectory, })
    createNodeField({ node, name: 'path', value: parent.relativePath, })
  }
}

exports.createPages = async () => {
  await writeCMSConfig();
}

exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'MarkdownRemark',
      interfaces: ['Node'],
      fields: {
        isFuture: {
          type: 'Boolean!',
          resolve: source => new Date(source.frontmatter.date) > subDays(new Date(), 1),
        },
      },
    }),
  ]);
}

async function writeCMSConfig() {
  const config = require('./src/admin/config');
  const writeBase = path.resolve('./public/admin/');

  await mkdir(writeBase, { recursive: true });
  await writeFile(path.join(writeBase, 'config.yml'), YAML.stringify(config), 'utf8');
}