
module.exports=(options,app)=>{

    return async function ipIdentify(ctx,next){//
       
        console.log(ctx.request.ip);

        await next();   
    }
}