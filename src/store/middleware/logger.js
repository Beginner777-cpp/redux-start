const logger = param=>state => next => action => {
    console.log('logging ', param);
    next(action)
}
export default logger;