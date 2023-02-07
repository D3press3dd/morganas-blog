
export function generatePosts (): Array<{
  id: string
  title: string
  text: string
  created: string
}> {
  const blogPosts = []

  for (let i = 0; i < 20; i++) {
    const uniqueId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    const title = 'Este es un título de 10 palabras'
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel justo vel massa luctus tempor. Integer auctor, sem a aliquet aliquam, velit velit commodo velit, a facilisis nulla dui id dui. Sed accumsan, ex non congue tincidunt, dolor augue faucibus nisl, in viverra lectus elit id nisi. Nullam non neque eros. Integer facilisis varius libero, a tempor nisl euismod eget. Nam in massa vel nisi congue commodo at vitae justo. Proin vestibulum lacus a dui commodo, eget euismod ligula scelerisque. Sed venenatis, purus vel mollis malesuada, magna elit auctor eros, vel tempor purus lectus at eratLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel justo vel massa luctus tempor. Integer auctor, sem a aliquet aliquam, velit velit commodo velit, a facilisis nulla dui id dui. Sed accumsan, ex non congue tincidunt, dolor augue faucibus nisl, in viverra lectus elit id nisi. Nullam non neque eros. Integer facilisis varius libero, a tempor nisl euismod eget. Nam in massa vel nisi congue commodo at vitae justo. Proin vestibulum lacus a dui commodo, eget euismod ligula scelerisque. Sed venenatis, purus vel mollis malesuada, magna elit auctor eros, vel tempor purus lectus at eratLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel justo vel massa luctus tempor. Integer auctor, sem a aliquet aliquam, velit velit commodo velit, a facilisis nulla dui id dui. Sed accumsan, ex non congue tincidunt, dolor augue faucibus nisl, in viverra lectus elit id nisi. Nullam non neque eros. Integer facilisis varius libero, a tempor nisl euismod eget. Nam in massa vel nisi congue commodo at vitae justo. Proin vestibulum lacus a dui commodo, eget euismod ligula scelerisque. Sed venenatis, purus vel mollis malesuada, magna elit auctor eros, vel tempor purus lectus at erataa.'
    const created = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

    const blogPost = {
      id: uniqueId,
      title,
      text,
      created
    }

    blogPosts.push(blogPost)
  }

  return blogPosts
}
