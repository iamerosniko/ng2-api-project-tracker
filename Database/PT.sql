USE [dbbtVulTstp1]
GO

/****** Object:  Table [dbo].[PT_Projects]    Script Date: 2/22/2017 4:45:06 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PT_Projects](
	[pt_project_id] [uniqueidentifier] NOT NULL,
	[pt_project_name] [nvarchar](50) NOT NULL,
	[pt_project_desc] [nvarchar](50) NOT NULL,
	[pt_project_tech] [nvarchar](50) NOT NULL,
	[pt_project_owner] [nvarchar](25) NULL,
	[pt_project_deleted] [bit] NOT NULL,
	[pt_project_show] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[pt_project_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


