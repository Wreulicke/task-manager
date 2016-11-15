import created from "../module/create"
export default (name) => {
  return {
    name,
    detail: {
      created: created()
    }
  }
}