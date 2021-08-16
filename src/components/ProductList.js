
function ProductList() {
  return (
    <div className="px-6 md:px-28 py-8 md:py-12 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 bg-primary-light">
      <div className="space-y-3">
        <div className="rounded bg-secondary-dark h-44"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
      </div>

      <div className="space-y-3">
        <div className="rounded bg-secondary-dark h-44"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
      </div>

      <div className="space-y-3">
        <div className="rounded bg-secondary-dark h-44"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
      </div>

      <div className="space-y-3 md:hidden">
        <div className="rounded bg-secondary-dark h-44"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
        <div className="rounded bg-secondary-dark h-6"></div>
      </div>

    </div>
  )
}

export default ProductList;