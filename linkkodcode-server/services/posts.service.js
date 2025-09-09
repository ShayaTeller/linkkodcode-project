import { read, write } from "../dal/dal.js";
import idcreator from "../utils/idcreator.js";

export async function getPosts() {
  try {
    const data = await read();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getOnePostById(id) {
  let result;
  try {
    const datainfile = JSON.parse(await read());
    datainfile.forEach((element) => {
      if (element.id == id) {
        result = element;
      }
    });
    return result;
  } catch (error) {
    return error;
  }
}


export async function addNewPost(imgurl, likes, description, userNeme) {
    const timenow = new Date()
  try {
    const datainfile = JSON.parse(await read());
    const newPost = {
      imgurl: imgurl,
      likes: likes,
      description: description,
      username: userNeme,
      time:timenow
    };
    datainfile.push(newPost);
    const arrangeddata = idcreator(datainfile);
    write(JSON.stringify(arrangeddata))
    return "Post received and saved successfully";
  } catch (error) {
    return "The save failed";
  }
}



export async function uptadePost(id, update) {
  try {
    const id = id;
    const datainfile = JSON.parse(await read());
    const newPost = {
      imgurl: update.imgurl,
      likes: update.likes,
      description:update.description,
      username:update.userNeme,
    };
    datainfile.push(newPost);

    const arrangeddata = idcreator(datainfile);

    write(JSON.stringify(arrangeddata))

    return "Post received and saved successfully";
  } catch (error) {
    return "The save failed";
  }
}



export async function DeletePost(id) {
    const datainfile = JSON.parse(await read());
datainfile.forEach((element) => {
      if (element.id == id) {
        element = null
      }})
  return "delete";
}
