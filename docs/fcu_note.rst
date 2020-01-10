######################
Release note
######################

20200110:
    1. add cloud.edu login for ironwood_openedu
    2. move the app setting into common.py

Modified:
    lms/djangoapps/school_id_login/admin.py
    lms/djangoapps/school_id_login/models.py
    lms/djangoapps/school_id_login/views.py
    lms/envs/common.py
    lms/envs/production.py
    lms/static/js/student_account/views/account_settings_factory.js
    lms/static/js/student_account/views/account_settings_fields.js
    lms/templates/student_account/login.underscore
    lms/templates/student_account/register.underscore
    lms/urls.py
    openedx/core/djangoapps/user_api/accounts/settings_views.py
add files:
    lms/djangoapps/school_id_login/migrations/0004_auto_20200108_0309.py

######################

20190912:
    1.add nid login into ironwood
Modified:   
    lms/envs/common.py
    lms/envs/production.py
    lms/static/js/student_account/views/account_settings_factory.js
    lms/static/js/student_account/views/account_settings_fields.js
    lms/static/sass/views/_login-register.scss
    lms/templates/student_account/account_settings.html
    lms/templates/student_account/login.underscore
    lms/templates/student_account/register.underscore
    lms/urls.py
    openedx/core/djangoapps/user_api/accounts/settings_views.py

Add files:
    docs/fcu_note.rst
    lms/djangoapps/school_id_login/
    lms/templates/school_id_login/
