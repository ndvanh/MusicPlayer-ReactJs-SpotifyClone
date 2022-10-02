export default function Information({type,title,content,img,color,linkImg}) {
  return (
    <div className='px-8' style={{background:`linear-gradient(to bottom,#6c47ff,${color})`}}
    >
       <div className="flex pt-9 pb-6">
        {img ? <img alt="Ảnh thông tin" src={require(`../../assets/images/${img}`)} className=" object-cover h-[232px] w-[232px] shadow-[0_2px_20px_10px_rgba(0,0,0,0.3)] lg:h-[150px] lg:w-[150px] md:h-[150px] md:w-[210px] sm:w-[150px] "/>
          : <img alt={`Ảnh ${title}`} src={linkImg} className=" object-cover h-[232px] w-[232px] shadow-[0_2px_20px_10px_rgba(0,0,0,0.3)] lg:h-[150px] lg:w-[150px] md:h-[150px] md:w-[210px] sm:w-[150px] "/>
        }
         <div className="ml-6 flex flex-col justify-between  overflow-hidden">
           <h2 className="uppercase text-textwhite font-bold text-[12px] md:text-[10px] ">{type}</h2>
           <span draggable='true' className=" text-textwhite font-bold text-[94px] overflow-hidden whitespace-nowrap text-ellipsis
           2xl:text-[80px] xl:text-[60px] lg:text-[50px] md:text-[25px] sm:text-[30px]">{title}</span>
           <h2 className="text-text1 text-[15px] md:text-[10px] ">{content}</h2>
         </div>
       </div>
     </div>
  )
}
