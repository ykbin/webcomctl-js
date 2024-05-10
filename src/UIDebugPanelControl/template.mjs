export const NAME = 'DebugPanel';

export const CLASS = {
  ROOT: "uic-dbgbtns-root",
};

export const HTML = `
<div class="${CLASS.ROOT}"></div>
`;

export const CSS = `
.${CLASS.ROOT}
{
  position: absolute;
  bottom: 2px;
  left: 2px;
  width: auto;
  height: auto;
  padding: 5px 5px 0px 5px;
  border: 1px solid #d0dbe9;
  border-radius: 2px;
  background-color: #fdfdfd;
  font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont,
                "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.${CLASS.ROOT} *
{
  box-sizing: border-box;
}

.${CLASS.ROOT} > div
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  min-width: 90px;
  margin-bottom: 5px;
  color: white;
  background-color: #488ee9;
}

.${CLASS.ROOT} > div:hover
{
  background-color: #417cc8;
}
`;
