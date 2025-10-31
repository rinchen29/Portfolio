import serviceStyle from "../styles/service.module.css";
import services from "../../data/Service.json";
import { FaReact,FaCode,FaWordpress} from "react-icons/fa";
const Service = () => {
  const reacIcons={
    FaReact,
    FaCode,
    FaWordpress
  }
  return (
    <div className={serviceStyle.container}>
         <h2>Service</h2>
        <div className={serviceStyle.service}>
          {services.map((service)=>{
            const Icon=reacIcons[service.icon];
          return(<div className={serviceStyle.serviceCard} key={service.id}>
            <div className={serviceStyle.serviceCardInner}>
              <div className={serviceStyle.serviceInnerIcon}>
                {Icon && <Icon/>}
              </div>
              <div>
                <p>{service.title}</p>
              </div>
            </div>
            <div className={serviceStyle.serviceCardOuter}>
              <div className={serviceStyle.serviceOuterIcon}>
                {Icon && <Icon/>}
              </div>
              <div className={serviceStyle.serviceDescription}>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
          )})}
        </div>
    </div>
  );
};

export default Service;
