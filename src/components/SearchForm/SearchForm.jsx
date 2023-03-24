import PropTypes from "prop-types";

export function SearchForm({ onSubmit }) {
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="query"
                    autoFocus
                    placeholder="Search movie"
                />
                <button type="submit">Search</button>
            </form>
        </>
    );
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
