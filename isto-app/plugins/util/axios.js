export default function ({ $axios, redirect , app }) {
  $axios.onRequest(config => {
    //console.log('Making request to ' + config.url)
  });

  $axios.onError(err => {
    console.log(err.response.data.message);
    console.log(err.response.data.exception);
    console.log(err.response.data.file);
    console.log(err.response.data.line);
    // const code = parseInt(err.response && err.response.status);
    redirect('/error');
  });
}
