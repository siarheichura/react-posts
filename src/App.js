import './App.css';
import { FacebookPost } from './components/FacebookPost';
import { OnlinerCard } from './components/OnlinerCard';
import { JobsCard } from './components/JobsCard';
import { YandexMusicCard } from './components/YandexMusicCard';

const facebookData = [
  {
    avatarUrl: 'https://lh3.googleusercontent.com/proxy/pSI9-ccWMhMisHPSrct6tg4RS5lOZl23r3w4VDZwQKPYZTUXtneVrxA8W4DDFmaG935N7-fV7MawoN30tXS0jm-_gfecc9deumirYkSLljLGvLIxmQE',
    name: 'Sashka Lukashenko',
    education: 'LolKek',
    post: 'Zhestochayshe nakazat vseh',
    time: '2 minutes ago'
  }
]

const onlinerData = [
  {
    article: 'НЕДВИЖИМОСТЬ',
    commentsCount: '96',
    title: 'Съездили на крупнейшую выставку дизайна и интерьеров',
    backgroundUrl: 'https://imgproxy.onliner.by/N9g7olFf32Uib3jKxMHIU2wqiXelxr-L-JQcbxKp89M/rt:fill/s:748:310/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/Ynkvd2lkZ2V0L25l/d3Mvb3JpZ2luYWwv/YTg0Mjc1NTE5NDRl/YmJlYjI3NTUwM2Zj/NWMyMDNjM2YuanBl/Zw.webp'
  }
]

const jobsData = [
  {
    job: 'Junior React.js Engineer (Internship/React.js Lab)',
    company: 'ООО АйтиРекс Групп ✓',
    city: 'Минск',
    jobDescription: 'Медицинское обслуживание. Онлайн-ивенты. Реферальная программа',
    companyDescription: '10+ лет успешной работы на глобальном рынке ИТ-услуг. Какие знания и навыки нужны для старта: Базовые знания HTML...',
    date: '7 сентября'
  }
]

const musicData = [
  {posterUrl: 'https://avatars.yandex.net/get-music-content/4382102/43ebb8a2.a.17862852-1/200x200',
  song: 'Гильотина',
  artist: 'Drezden',
  album: 'сингл'},
  
  {posterUrl: 'https://avatars.yandex.net/get-music-content/4581417/e58c4902.a.17919211-1/200x200',
  song: 'LIPS HA',
  artist: 'INSTASAMKA',
  album: 'сингл'},

  {posterUrl: 'https://avatars.yandex.net/get-music-content/4388221/d609b966.a.17914059-1/200x200',
  song: 'Kill The Noice',
  artist: 'Papa Roach',
  album: 'сингл'}
]

function App() {
  return (
    <div className="App">
      <h1>Task 1 Facebook</h1>
      {facebookData.map(item => {
        const { avatarUrl, name, education, post, time } = item

        return (
          <FacebookPost 
          avatarUrl = {avatarUrl}
          name = {name}
          education = {education}
          post = {post}
          time = {time}
        />
        )
      })}

      <h1>Task 2 Onliner</h1>
      {onlinerData.map(item => {
        const { article, commentsCount, title, backgroundUrl } = item

        return (
          <OnlinerCard 
            article = {article}
            commentsCount = {commentsCount}
            title = {title}
            backgroundUrl = {backgroundUrl}
          />
        )
      })}

      <h1>Task 3 Rabota.by</h1>
      {jobsData.map(item => {
        const { job, company, city, jobDescription, companyDescription, date } = item

        return (
          <JobsCard 
          job = {job}
          company = {company}
          city = {city}
          jobDescription = {jobDescription}
          companyDescription = {companyDescription}
          date = {date}
        />
        )        
      })}

      <h1>Task 4 Yandex Music</h1>
      <div className='musicWrapper'>
        {musicData.map(item => {
          const { posterUrl, song, artist, album } = item

          return (
            <YandexMusicCard 
            posterUrl = {posterUrl}
            song = {song}
            artist = {artist}
            album = {album}
            />
          )
        })}
      </div>

    </div>
  );
}

export default App;