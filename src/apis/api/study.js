import instance from "../utils/instance"

export const searchStudyCategory = async () => {
    return await instance.get("/study/category")
}

export const saveStudyGroup = async (data) => {
    return await instance.post("/study/save", data)
}

export const searchStudyList = async () => {
    return await instance.get("/study/boardlist")
}

export const searchStudyBoard = async (id) => {
    return await instance.get(`/study/board/${id}`)
}