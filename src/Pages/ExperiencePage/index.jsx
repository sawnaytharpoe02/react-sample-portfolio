import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { LuSchool } from 'react-icons/lu';
import { MdOutlineWorkOutline } from 'react-icons/md';

const ExperiencePage = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#492540">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: '#492540', color: '#fff' }}
          icon={<LuSchool />}>
          <h3 className="vertical-timeline-element-title">
            My Random High School, Random Place, Random State
          </h3>
          <p> High School Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2020"
          iconStyle={{ background: '#492540', color: '#fff' }}
          icon={<LuSchool />}>
          <h3 className="vertical-timeline-element-title">
            Karen Bathist Theological Seminary
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Private School Diploma
          </h4>
          <p> Diploma in Communicate English </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<MdOutlineWorkOutline />}>
          <h3 className="vertical-timeline-element-title">
            Back End Engineer - Google
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>Developed the backend infrastructure for 3 projects.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<MdOutlineWorkOutline />}>
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - Twitch
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Helped the team launch 2 major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default ExperiencePage;
