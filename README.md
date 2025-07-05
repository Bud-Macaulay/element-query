# Element Query.

A lightweight js framework for querying chemical formulas using human-readable string expressions.

This package features:

- Parsing chemical formulas (e.g., `Fe2O3`, `SF6`) for elements
- Simple boolean logic (`and`, `or`, `not`) implemented atop a tokeniser and abstract syntax tree.
- Left to right logical parsing with parenthesis support.
- Formula enriching to in principle allow searches for specific elemental compositions (albeit this is not implemented in any form here...) `This may need testing for complex formula Fe2(Li2O4)3.`

A testing framework and example page that allows:

- Viewing the underlying Abstract Syntax Tree (AST) and token stream of any query
- Filter a dataset (`example_data.json`) in real time based on queries
- Match individual formulas live as you type

## Query Syntax

Queries support logical composition using:

- **Element symbols**: `Fe`, `O`, `S`, etc.
- **Predicates**: such as `s-block`, `noble-gas`, etc.
- **Boolean operators**: `and`, `or`, `not`
- **Parentheses** for grouping: `(O and nonmetal) or Fe`

### Example Queries

- `O and not d`
- `transition and not Fe`
- `(C or Si) and nonmetal`

The framework leans on a highly simplified periodic table object and thus is easily expanded. Advanced queries can be predifined via predication (see `core/predicates.js`) and include types like:

| Query Term   | Meaning               |
| ------------ | --------------------- |
| `sblock`     | Element is in s-block |
| `transition` | Transition metal      |
| `noble-gas`  | Noble gas element     |
| `metal`      | General metal type    |

These queries are detected by the string parser and therefore new keywords must be greater than 2 chars to avoid elemental confusion.

## Testing and development.

While, the suite allows directly passing tokens or AST objects to the query engine, this is not the expected use case.

Instead a fairly large test suite of string formulas and string tests can be initialised with npm test, these tests include syntatical edge cases, basic logic parsing and complex boolean expressions.

Alternatively, a test html page is availible:

```
python -m http.server 8000
http://127.0.0.1:8000/
```

There are 3 test files, that can be loaded in `examplepage.js` the objects are parsed and filtered live (on change of query). As of the current implementation, it seems somewhat reasonable to allow live filtering of even the large dataset. With some smart caching, or only repolling the object on complete query I imagine this may be easy to implement directly onto MCXD.

### Note.

One quick caveat is that this will not play nicely with the periodic table selector. I briefly considered having the textbox/periodic table coupled together so updates to one updated the other, but its not clear how to colour grouped conditionals such as 'dblock', as these arent green or red...?

I dont think its possible to have a nice graphical representation of such queries without alot of work.
How would one color:

```
Si or (Li and not (alkali)), Li is both red and green here...
```

I think maybe an 'advanced search button that pops out its own query selector (over-riding the pt) is probably a better solution.
