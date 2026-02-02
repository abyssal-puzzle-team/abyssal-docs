import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '为Puzzle Hunt而生',
    Svg: require('@site/static/img/puzzle.svg').default,
    description: (
      <>
        placeholder
      </>
    ),
  },
  {
    title: '简单易用',
    Svg: require('@site/static/img/folder-check.svg').default,
    description: (
      <>
        placeholder
      </>
    ),
  },
  {
    title: '用户友好',
    Svg: require('@site/static/img/users.svg').default,
    description: (
      <>
        placeholder
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
