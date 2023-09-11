# masamo-text-editor

This is a text editor written in javascript.

## table of contents

- [masamo-text-editor](#masamo-text-editor)
    - [table of contents](#table-of-contents)
    - [getting started](#getting-started)
        - [development](#development)
    - [usage](#usage)
    - [roadmap](#roadmap)
    - [contributing](#contributing)
    - [license](#license)
    - [contact](#contact)
    - [acknowledgements](#acknowledgements)

## getting started

Clone this repository and run `npm install`.

```sh
$ git clone git@github.com:k2con/masamo-text-editor.git
$ cd masamo-text-editor
$ npm install
```

### development

- `npm run dev` - start development server

## usage

Include the style sheet and javascript file in your html.

```html
<head>
    <!-- ... -->
    <link rel="stylesheet" href="path/to/masamo-text-editor/style.css">
</head>
<body>
    <!-- ... -->
    <script src="path/to/masamo-text-editor/app.js"></script>
</body>
```

Create a new instance of the editor.

```js
const editor = new MasamoTextEditor({
    // options
});
```

## roadmap

- [x] create MasamoTextEditor class
- [x] create buildElement function to build the editor html
- [x] MasamoTextEditor constructor generates the editor html and appends it to the passed element (the element is selected by the constructor. You can pass a selector string or an element object. Ex: `new MasamoTextEditor('#editor')`)
- [x] add defalut options to the constructor
- [x] add `useH1` option. true as default. If true, the editor will use h1 as main heading, otherwise it will use h2.
- [x] format html code when user toggles the code view
- [x] focus the ditor when it loads
- [x] add a `p` element when editor is focused and it is empty
- [ ] modularize the code
- [ ] get html from the editor with a method
- [ ] add `useCodeView` option. false as default. If true, the editor will use code view as default.
- [ ] add custom icons for the toolbar
- [ ] add emojis to the toolbar
- [ ] add custom fonts option
- [ ] improve the color picker
- [ ] improve the background color picker
- [ ] improve image upload
- [ ] allow images to be wheather uploaded or linked
- [ ] allow images to be aligned
- [ ] allow images to be resized
- [ ] add a link dialog instead of a prompt
- [ ] add table support
- [ ] add video support
- [ ] add custom css option

## contributing

Contributions, issues and feature requests are welcome! Feel free to check [issues page](https://github.com/k2con/masamo-text-editor/issues). 

Please consider collaborating. **It would be greatly appreciated**.

To collaborate, read the [contributing guide](CONTRIBUTING.md).

## license

This project is [MIT](LICENSE) licensed.

## contact

Feel free to contact me if you have any questions.

- [Send me an email](mailto:rincorpes@gmail.com)
- [Contact me on twitter](https://twitter.com/thehomelessdev)

## acknowledgements

- [Masamo](masamo.tech) - for the need of a text editor
- [K2](k2con.com) - for the opportunity to learn and practice
