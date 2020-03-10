// NetlifyCMS config
const backend = {
  name: process.env.NODE_ENV !== 'production' ? 'test-repo' : 'git-gateway',
  branch: process.env.BRANCH || 'master'
}

const media = {
  media_folder: 'content/images',
  public_folder: '../images'
}

const events = {
  name: 'events',
  label: 'Concerts',
  label_singular: 'Concert',
  folder: 'content/events',
  create: true,
  fields: [
    { name: 'title' },
    { name: 'date', widget: 'datetime', format: 'YYYY-MM-DD', dateFormat: 'MM/DD/YYYY', timeFormat: false },
    { name: 'time', widget: 'datetime', format: 'HH:mm', timeFormat: 'hh:mm a', dateFormat: false },
    { name: 'location' }
  ]
}

function makePage(title, fields = []) {
  return {
    name: title.toLowerCase(),
    label: title,
    file: `content/pages/${title.toLowerCase()}.md`,
    fields: [
      { name: 'title' },
      ...fields
    ]
  }
}

const pages = {
  name: 'pages',
  label: 'Pages',
  label_singular: 'Page',
  files: [
    // makePage('Home', [{ name: 'image', widget: 'image' }]),
    makePage('About', [
      { name: 'image', widget: 'image' },
      { name: 'body', widget: 'markdown', required: false}
    ]),
    makePage('Media', [
      { name: 'videos', widget: 'list', field: { name: 'youtubeId', label: 'Youtube ID' } }
    ]),
  ]
}

module.exports = {
  backend,
  ...media,
  collections: [
    events,
    pages
  ]
}