USE [dbbtVulTstp1]
GO

/****** Object:  Table [dbo].[NG2_Cars]    Script Date: 2/22/2017 4:45:47 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[NG2_Cars](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[brand] [varchar](50) NOT NULL,
	[model] [varchar](50) NOT NULL,
	[fuelType] [varchar](50) NULL,
	[bodyStyle] [varchar](50) NULL,
	[topSpeed] [int] NULL,
	[power] [int] NULL,
 CONSTRAINT [PK_NG2_Cars] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO


