import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
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
        required: true,
   },
   authorImage: {
    type: 'string',
    description: 'https://avatars.githubusercontent.com/u/77097223?v=4',
    required: true,
    },
   preview: {
    type: 'string',
    description: 'This is a description! Desciptions are great.',
    required: true,
    },
    readTime: {
        type: 'string',
        description: '2 minutes',
        required: true,
    }
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