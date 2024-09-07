export const useCardProyectExperience=(card:any,id:any)=>{
const HandleId=()=>{
    card?.map((cardd:any)=>{
        if(cardd.id===id.id){
            cardd.state=id.state
        }else{
            cardd.state=false
        }
    })
}
return {HandleId}
}