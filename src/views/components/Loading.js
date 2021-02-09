let Loading = {
  render: async () => {
    let view = `
    <div class="spinner-grow text-primary" role="status">
      <span class="sr-only"></span>
    </div>
    `
    return view
  },
  after_render: async () => {
    // vazio
  }
}

export default Loading