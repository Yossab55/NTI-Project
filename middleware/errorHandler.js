const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';
// بصراحة معلم عاش بجد من الحاجات الي شوفتها حلوه انك عامل رسالة محترمة قوي
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        statusCode: err.statusCode,
        ...(process.env.NODE_ENV === 'development' && { 
            stack: err.stack,
            error: err 
        })
    });
};

module.exports = errorHandler;
