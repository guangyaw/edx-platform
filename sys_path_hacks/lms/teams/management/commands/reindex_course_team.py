import warnings
warnings.warn("Importing teams.management.commands.reindex_course_team instead of lms.djangoapps.teams.management.commands.reindex_course_team is deprecated", stacklevel=2)

from lms.djangoapps.teams.management.commands.reindex_course_team import *
