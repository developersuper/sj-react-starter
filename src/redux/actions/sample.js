import actionTypes from 'redux/actionTypes'

const sampleActions = {
    update : (data) => {
        return {
            type: actionTypes?.UPDATE_SAMPLE,
            payload: data
        }
    }
}

export default sampleActions