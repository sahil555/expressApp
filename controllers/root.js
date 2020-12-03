const getRequest = req => ({
    method: req.method,
    path: req.path,
    headers: req.headers,
    host: req.hostname,
    baseUrl: req.baseUrl,
    ip: req.ip,
    message: 'Handling '+ req.method
});

const getRoot = async (req,res,next) => {
    res.json(getRequest(req));
}

const postRoot = async (req,res,next) => {
    res.json(getRequest(req));
}

export const rootControllers = {
    getRoot,
    postRoot
};