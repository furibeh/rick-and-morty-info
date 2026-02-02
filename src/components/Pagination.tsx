import React from 'react';

export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-10">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-40"
      >
        Anterior
      </button>

      <span className="text-sm text-gray-300">
        Página {page} de {totalPages}
      </span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-40"
      >
        Siguiente
      </button>
    </div>
  );
}
