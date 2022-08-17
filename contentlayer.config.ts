import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'This is an example of a blog title',
      required: true,
    },
    date: {
        type: 'date',
        description: '26/11/2008',
        required: true,
  },
  author: {
        type: 'string',
        description: 'Toby',
        required: false,
  },
  image: {
    type: 'string',
    description: 'https://github.com/developedbytoby.png',
    required: true,
},
  preview: {
    type: 'string',
    description: 'This is a description! Desciptions are great.',
    required: true,
    },
    end: {
      type: 'string',
      description: 'This is a closing note!',
      required: true,
      },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
})