import {
  Filter,
  Layout,
  Loading,
  Pagination,
  Repository,
} from '@trend-repositories/ui';
import { Mutations, useGetRepositories } from '../operations';
import { useGetLanguages } from '../operations/queries/useGetLanguages';

export function Index() {
  const { response, loading, filter } = useGetRepositories();
  const { languages } = useGetLanguages();

  const { starRepository } = Mutations;

  return (
    <Layout>
      <Filter languages={languages} />

      {response?.items?.map((repository) => (
        <Repository
          key={repository.id}
          id={repository.id}
          name={repository.name}
          url={repository.url}
          language={repository.language}
          languageColor={repository.languageColor}
          license={repository.license}
          description={repository.description}
          stars={repository.stars}
          forks={repository.forks}
          topics={repository.topics}
          isStarred={repository.isStarred}
          onStar={() => starRepository(repository)}
        />
      ))}

      {loading && <Loading />}

      {filter === 'all' && !loading && <Pagination total={response.total} />}
    </Layout>
  );
}

export default Index;
