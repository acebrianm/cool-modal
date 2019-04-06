## Cool Modal

### Description

Web app developed in React that recieves an ID from the user, makes a call to an api and lets you edit the contents of the response. When the data is saved it displays it in the main site succesfully edited.

The Modal used to edit the information was designed from scratch using only HTML and CSS, it can be modified with the given props explained below.


### `npm install`

Installs npm modules to be used by the app.

### `npm start`

Runs the app in the development mode.</br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Modal Props
---

| Props                   | Type    | Default                 | Description                                                             |
| ----------------------- | ------- | ----------------------- | ----------------------------------------------------------------------- |
| open                    | bool  	|                         | If `true` modal is open.  (**required**)                                |
| onCancel                | func()  |                         | Callback fired when cancel button is clicked.                           |
| onOk                    | func()  |                         | Callback fired when ok button is clicked.                               |
| close                   | func() 	|                         | Callback fired when the component requests to be closed. (**required**) |
| children                | element |                         | A single child content element.                                         |
| customHeaderStyle       | string  | 'modal-header-default'  | Classname used for header style.                                        |
| customHeaderTitle       | string  | 'Editing: '             | Text used for header title.                                             |
| customHeaderTitleStyle  | string  | 'header-title-default'  | Classname used for header style.                                        |
| customOkButton          | string  | 'btn-confirm'           | Classname used for ok button style.                                     |
| customCancelButton      | string  | 'btn-cancel'            | Classname used for cancel button style.                                 |
| customOkButtonTitle     | string	| 'Save'                  | Text used for ok button.                                                |
| customCancelButtonTitle | string	| 'Cancel'                | Text used for cancel button.                                            |

