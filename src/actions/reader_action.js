import { reader } from './constants'

const requestReader = (payload) => {
    return {
        type: reader.REQUEST,
        pending: true,
        payload
    }
}

const changeTheme = (payload) => {
    return {
        type: reader.CHANGE_THEME,
        payload
    }
}

const changeFont = (payload) => {
    return {
        type: reader.CHANGE_FONT,
        payload
    }
}

const changeSize = (payload) => {
    return {
        type: reader.CHANGE_SIZE,
        payload
    }
}

export { requestReader, changeTheme, changeFont, changeSize }