import { GITHUB_LIBARCHIVE_URL } from "@/lib/Links";
import { HdrGitHubButton } from "@/comp/HdrGitHubButton/builder";

const { ROOT_CLASS, ROOT_HTML, CSS } = HdrGitHubButton.template("HdrLibarchiveGitHubButton", {
  url: GITHUB_LIBARCHIVE_URL,
});

export { ROOT_CLASS, ROOT_HTML, CSS };
