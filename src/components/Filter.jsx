import React from "react";

const Filter = ({ filter, setFilter, sort, setSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>

      <div className="filter-options">
        <div>
          <p>Status:</p>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>

        <div>
          <p>Ordem alfabética:</p>

          <button
            className={sort === "Asc" ? "active" : ""}
            onClick={() => setSort("Asc")}
          >
            Asc
          </button>

          <button
            className={sort === "Desc" ? "active" : ""}
            onClick={() => setSort("Desc")}
          >
            Desc
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;