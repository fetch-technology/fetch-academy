import os

from fabric.api import cd, env, run, sudo, task

PROJECT_NAME = 'fetch-academy'
PROJECT_ROOT = '/var/www/{}'.format(PROJECT_NAME)
VENV_DIR = os.path.join(PROJECT_ROOT, 'env')
REPO = 'git@github.com:fetch-technology/fetch-academy.git'

env.hosts = []
env.use_ssh_config = True


@task
def production():
    env.hosts = ['root@206.189.47.134']
    env.environment = 'production'


@task
def deploy():
    with cd(PROJECT_ROOT):
        run('git stash')
        run('git pull origin master')

        run('pipenv install')
        run('pipenv run ./manage.py migrate')
        run('npm install')
        run('npm run build')
        # run('pipenv run ./manage.py collectstatic --no-input')
        sudo('supervisorctl restart fetch_academy')
