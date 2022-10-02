import Music from '../data/songs.json'
import { auth } from '../service/firebase'

const newAuthor = []
export const uniqAuthor = Music.filter(song => {
    const isDuplicate = newAuthor.includes(song.author)
    // chưa có
    if (!isDuplicate){
    newAuthor.push(song.author)
    return true
    }
    return false
})

export const logOut = () => {auth.signOut()}