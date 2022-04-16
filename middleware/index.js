export const logActions = store => next => actionInfo => {
    console.log("Disparando:", actionInfo)
    next(actionInfo)
}