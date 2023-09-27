import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';
import { ArticleDetailsRecommendationsSchema } from './articleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
