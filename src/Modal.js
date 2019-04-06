import React from 'react'
import './styles/modal.css'

const Modal = (props) => {
  const {
    open,
    onCancel,
    onOk,
    close,
    children,
    customHeaderStyle,
    customHeaderTitle,
    customHeaderTitleStyle,
    customOkButton,
    customCancelButton,
    customOkButtonTitle,
    customCancelButtonTitle
  } = props

  return (
    <div className='modal' style={{
      opacity: open ? '1' : '0',
      zIndex: open ? '99' : '-1'
    }}>
      <div className='modal-grayed' onClick={close}></div>
      <div className='modal-root'>
        <div className='modal-container' style={{
          transform: open ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: open ? '1' : '0'
        }}>
          <div className='modal-content'>
            <div className={`modal-header ${customHeaderStyle ? customHeaderStyle : 'modal-header-default'}`}>
                <h4 className={`header-title ${customHeaderTitleStyle ? customHeaderTitleStyle : 'header-title-default'}`}>{customHeaderTitle ? customHeaderTitle : 'Editing: '}</h4>
                <button className='btn-close' onClick={close}>X</button>
            </div>
            <div className='modal-body'>
              {children}
            </div>
            <div className='modal-footer'>
                <button className={customOkButton ? customOkButton : 'btn-confirm'} onClick={() => {
                  onOk && onOk()
                  close()
                }}>{customOkButtonTitle ? customOkButtonTitle : 'Save'}</button>
                <button className={customCancelButton ? customCancelButton : 'btn-cancel'} onClick={() => {
                  onCancel && onCancel()
                  close()
                  }}>{customCancelButtonTitle ? customCancelButtonTitle : 'Cancel'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal