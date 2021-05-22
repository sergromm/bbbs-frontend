import { lazy, Suspense } from "react";
import CoverStory from "./CoverStory";
import DescribeArticle from "./DescribeArticle";
import Description from "./Description";
import Paper from "./Paper";
import PosterList from "./PosterList";
import QuestionList from "./QuestionList";

const Video = lazy(() => import("./Video"));
const SocialIframe = lazy(() => import("./SocialIframe"));

function MainPage() {
  const articleData = {
    first: {
      text: `У таких детей возникает ощущение отверженности. Оно приводит к
    напряженности и недоверию к людям и, как итог, к реальному неприятию
    себя и окружающих.`,
      color: "describe-article_color_green",
    },
    second: {
      text: `Развитие детей-сирот отличается от развития детей, живущих в семьях. Все
      этапы развития у детей-сирот проходят с искажениями и имеют ряд
      негативных особенностей.`,
      color: "describe-article_color_light-blue",
    },
  };

  return (
    <main className="main-grid">
      <Description />
      <CoverStory />
      <Paper />
      <DescribeArticle
        color={articleData.first.color}
        text={articleData.first.text}
      />
      <PosterList />
      <Suspense fallback={<div>Загрузка...</div>}>
        <SocialIframe />
        <Video />
      </Suspense>
      <QuestionList />
      <DescribeArticle
        color={articleData.second.color}
        text={articleData.second.text}
      />
    </main>
  );
}

export default MainPage;
