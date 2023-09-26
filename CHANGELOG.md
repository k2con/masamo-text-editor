# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),

and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.3] - 2023-09-10

### Added

- fix. Code modularization
- add. Custom icons

## [1.0.1] - 2023-09-10

### Added

- add `clors` option. It is an object that contains the colors that will be added in the editor. Example: `colors: { primary: '#ff0000' }`
- add `defaultContent` option. Its a string with the html that will be added to the editor when it loads. Example: `defaultContent: '<p>Some text</p>'`
- add utils directory where the utils functions will be stored.
    - move `buildElement` function to utils directory
- add `components` directory where the editor components will be stored.
    - add `EditorContainer` component. It is the editor container. It contains the editor header and the editor body with the contenteditable div and the code view textarea. 

## [1.0.0] - 2023-09-10

### Added

- create MasamoTextEditor class
- create buildElement function to build the editor html
- MasamoTextEditor constructor generates the editor html and appends it to the passed element (the element is selected by the constructor. You can pass a selector string or an element object. Ex: `new MasamoTextEditor('#editor')`)
- add defalut options to the constructor
- add `useH1` option. true as default. If true, the editor will use h1 as main heading, otherwise it will use h2.
- format html code when user toggles the code view
- focus the ditor when it loads
- add a `p` element when editor is focused and it is empty