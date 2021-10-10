const logger = param=>state => next => action => {
    console.log('logging ', param);
    return next(action)
}
export default logger;