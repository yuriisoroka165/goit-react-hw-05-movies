import PropTypes from "prop-types";

import { Form, Input, Button } from "./SearchForm.styled";

export function SearchForm({ onSubmit }) {
    return (
        <Form onSubmit={onSubmit}>
            <Input
                type="text"
                name="query"
                autoFocus
                placeholder="Search movie"
            />
            <Button type="submit">Search</Button>
        </Form>
    );
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
