export const utilityObject = (oldObject, updatedObject) =>{
    return{
        ...oldObject,
        ...updatedObject
    };
};