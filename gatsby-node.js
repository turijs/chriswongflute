/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent);

    createNodeField({ node, name: 'type', value: parent.relativeDirectory, })
    createNodeField({ node, name: 'path', value: parent.relativePath, })
  }
}