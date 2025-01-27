import Logo from '@/components/icons/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import {GITHUB_ORG_URL} from '@/utils/constants';

const Header = () => {
    return (
        <header>
            <div className="fb">
                <Logo />
                <ThemeToggle />
            </div>
            <div className="fi mt-2">
                <span className="gpt-title">MIDJOURNEY</span>
                <span className="gpt-subtitle">WEB</span>
            </div>
            <p className="mt-1 opacity-60 ">
                Powered by
                <a
                    className="b-buy-link ml-1 decoration-wavy underline-offset-8"
                    href={ GITHUB_ORG_URL } target="_blank"
                    rel="noopener noreferrer"
                >
                     AI 实验室
                </a>
            </p>    <br /> {/* 或者使用 "\n" 换行符 */}
            <p>免费体验版高峰期出图慢是正常现象，请勿重复提交</p>
        </header>
    );
};

export { Header};
