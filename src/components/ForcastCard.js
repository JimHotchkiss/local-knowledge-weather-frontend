import "./forcastCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, fas } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { faCloudSun } from "@fortawesome/free-solid-svg-icons"
import { faCloud } from "@fortawesome/free-solid-svg-icons"
import { faSnowflake } from "@fortawesome/free-solid-svg-icons"
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons"
import WindConditions from "../containers/WindConditions"
import React from "react"

function ForcastCard({ cityName, weatherData }) {
  console.log(weatherData.sys.country)
  return (
    <div id='forcast-card' className='forcast-card'>
      <div className='city-icon-div'>
        <div className='fontawesome-div'>
          {weatherData.weather !== undefined &&
          weatherData.weather[0].main.toLowerCase().includes("rain") ? (
            <FontAwesomeIcon icon={faCloudShowersHeavy} size='3x' />
          ) : weatherData.weather !== undefined &&
            weatherData.weather[0].main.toLowerCase().includes("snow") ? (
            <FontAwesomeIcon icon={faSnowflake} size='3x' />
          ) : weatherData.clouds !== undefined &&
            weatherData.clouds.all > 50 ? (
            <FontAwesomeIcon icon={faCloud} size='3x' />
          ) : weatherData.clouds !== undefined &&
            weatherData.clouds.all < 50 ? (
            <FontAwesomeIcon icon={faSun} size='3x' />
          ) : (
            <FontAwesomeIcon icon={faSun} size='3x' />
          )}
        </div>
        <h1>
          {cityName !== undefined
            ? `${cityName}, ${weatherData.sys.country}`
            : "Weather"}
        </h1>
      </div>
      <div className='condition-text'>
        <p>
          {weatherData.weather !== undefined
            ? `Current conditions: ${weatherData.weather[0].description}`
            : "No current data"}
        </p>
        <WindConditions weatherData={weatherData} />
      </div>
      <div className='comment-div'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        quasi id sint aspernatur ipsam incidunt! A vero ea pariatur ullam
        aliquam, explicabo quibusdam consequatur ducimus et, dolor praesentium,
        distinctio debitis? Dolor, doloremque sunt quia nulla doloribus deleniti
        voluptates modi rerum exercitationem debitis ex at, velit magnam quam
        aperiam possimus, repudiandae quisquam? Voluptatibus quia ut ipsa
        eligendi iure dicta tempora sit. Reprehenderit, maxime explicabo ex
        excepturi, autem voluptates nam illo dolores sint repellendus corporis
        rem quia quas dicta sit architecto necessitatibus? Deserunt quibusdam ab
        nemo quaerat labore veniam cupiditate, dignissimos aperiam. Ipsam dolor
        eaque eius ducimus explicabo nobis, eligendi quasi nam aperiam quae
        expedita tempore? Ipsum sint quasi, alias ea numquam obcaecati veritatis
        dolores architecto blanditiis laudantium et repellendus, quam fugiat.
        Dolorum magnam dignissimos natus qui rem aspernatur, porro obcaecati
        officia id necessitatibus enim. Culpa numquam vero minus facere placeat
        laudantium explicabo. Voluptate dignissimos optio eaque maxime. Earum
        omnis eum similique. Possimus fugit reiciendis debitis provident eius
        et. Suscipit inventore sit amet. Est fugiat quae ratione. Tempora
        corrupti, ipsam repellat debitis eaque recusandae sapiente sunt
        provident consectetur atque iure quas esse! Voluptas ut obcaecati ab
        dicta consequuntur autem perferendis harum porro. Aperiam consequatur,
        in deleniti eos minima sint? Repellendus, quod ut? Expedita dolorem odio
        porro amet perferendis eveniet? Cumque, dolores nulla! Provident
        veritatis quos ipsa at minima dolorum, ducimus placeat quod. Maxime,
        voluptate! Commodi assumenda fugiat temporibus praesentium tempora fuga
        molestiae sed totam, eaque accusamus qui quis corrupti impedit eius!
        Alias? Ab voluptate, dolorum ratione alias laudantium molestias saepe
        maxime nemo consectetur aspernatur, nisi nihil hic esse atque
        repellendus temporibus assumenda cumque id velit illo, iste vero eos
        natus soluta. Quas. Fugit cupiditate nisi quam accusantium maxime,
        aperiam beatae earum, voluptate repudiandae dolor voluptatem eius ad
        blanditiis illum molestias? Cum quo cumque repellendus possimus eius
        suscipit quas natus neque! Necessitatibus, dolores! Libero facere
        deleniti at rem sit voluptatibus enim, labore saepe minima nihil
        asperiores dolor vero, commodi sapiente ex corporis harum vel omnis.
        Commodi laboriosam veniam qui expedita reiciendis? Laboriosam, esse?
        Labore, laborum provident minima quidem quos, illo odio ipsa debitis
        repudiandae praesentium numquam dolorum exercitationem et mollitia quod.
        Ducimus nostrum non dolores nam consequatur aliquid nihil cum sed, quo
        quam! Libero labore magni doloremque eligendi dolore nostrum, culpa hic,
        totam corrupti beatae ipsa dolorem quos vel dignissimos corporis facilis
        inventore recusandae. Aliquid commodi laborum laudantium facere adipisci
        perferendis velit officia. Praesentium earum vel mollitia non facere
        minus ipsum, quidem veritatis nostrum. Sequi commodi magni odio et rerum
        sunt laboriosam quam, tenetur obcaecati autem quia, voluptatibus nulla
        numquam cumque doloribus repellendus! Fugiat nam tempora libero officia
        accusamus facilis, quidem harum doloribus consequatur commodi
        laudantium, non ab vitae a quae repellendus odit tempore quos magni
        dolor excepturi et. Cum exercitationem commodi voluptatum? Hic
        consequatur repudiandae, reprehenderit omnis incidunt consequuntur alias
        facere odit delectus animi inventore necessitatibus provident itaque
        aperiam, suscipit veritatis vitae asperiores? Explicabo quidem, dolorem
        at dignissimos ea nisi. Quasi, fugit. Explicabo consequatur esse nulla
        sed. Dolor quos minima labore repellat, aut impedit officiis quo et
        eaque sequi magnam, iste quisquam ad voluptates. Error vel ipsa
        architecto voluptatum in, pariatur aut! Voluptas doloremque nesciunt ex
        pariatur cumque consectetur eum quisquam? Dignissimos ex incidunt est
        exercitationem modi, voluptates maiores non! Quo mollitia hic accusamus
        enim, commodi cupiditate sapiente iure error nesciunt nisi? Ea expedita
        placeat eum itaque voluptate totam sed vitae molestias dicta blanditiis.
        Expedita repudiandae numquam ducimus reiciendis minus impedit deserunt
        assumenda dolor nostrum voluptatum vero, neque nemo accusantium, vitae
        consectetur? Dolorem eius repellat quia sunt libero tempore possimus
        magnam dolores, aperiam rem commodi illum velit facere in culpa iure
        accusantium nobis quaerat dolor quibusdam veritatis distinctio. Hic
        consectetur possimus dolorum.
      </div>
    </div>
  )
}

export default ForcastCard
