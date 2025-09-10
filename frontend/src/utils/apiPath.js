export const BASE_URL = 'http://localhost:4000'

export const API_PATHS = {

    AUTH:{

    REGISTER:   '/register' ,
    LOGIN: '/login',
    GET_PROFILE : '/api/auth/profile' ,
    },

    RESUME: {
        CREATE: '/api/resume',
        GET_ALL: '/ai/resume',
        GEY_BY_ID: (id) => `/api/resume/${id}`,
        UPDATE: (id) => `/api/resume/${id}`,
       DELETE:  (id) => `/api/resume/${id}`,
       UPLOADE_IMAGES: (id) => `/api/resume/${id}/uploade-image`,

        
    },

    Image: {
        UPLOADE_IMAGES: 'api/auth/uploade-image',
    }
}
