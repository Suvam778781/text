function Pagination({ page,setpage,totalPages}) {
  const prev = (
    <button
      data-testid="prev-page"
      disabled={page===1}
      onClick={() => setpage(page - 1)}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">{page}</button>;
  const next = (
    <button
      data-testid="next-page"
      onClick={() => setpage(page + 1)}
      disabled={page ===totalPages}
    >
      Next
    </button>
  );
  return (
    <div data-testid="page-container">
      <div>
        {prev}
        {currentPage}
        {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{totalPages}</b>
      </div>
    </div>
  );
}
export default Pagination;
