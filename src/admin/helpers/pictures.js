import apiSettings from './apiSettings';

export const renderer = file => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    try {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    } catch (error) {
      throw new Error("Ошибка при чтении файла");
    }
  });
};

export const getAbsoluteImgPath = imgPath => {
  const baseUrl = apiSettings.defaults.baseURL;
  return `${baseUrl}/${imgPath}` 
}