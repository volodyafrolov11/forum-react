import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const navigate = useNavigate();
        const canEdit = useSelector(getCanEditArticle);
        const article = useSelector(getArticleDetailsData);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article?.id));
            }
        }, [article, navigate]);

        const { t } = useTranslation('article-details');

        return (
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
                    {t('Назад кспику..')}
                </Button>
                {canEdit && (
                    <Button onClick={onEditArticle} theme={ButtonTheme.OUTLINE}>
                        {t('Редактировать')}
                    </Button>
                )}
            </HStack>
        );
    },
);
