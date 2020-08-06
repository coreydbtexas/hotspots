$(document).ready(function() {
    $('.modal').on('hidden.bs.modal', function () {
        const $this = $(this);
        const vidsrc_frame = $this.find("iframe");
        const vidsrc_src = vidsrc_frame.attr('src');
        vidsrc_frame.attr('src', '');
        vidsrc_frame.attr('src', vidsrc_src);
    });
});